CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;
REVOKE ALL ON FUNCTION private.has_role(UUID, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.has_role(UUID, public.app_role) TO authenticated, service_role;

DROP POLICY "Published products are public" ON public.products;
DROP POLICY "Admins create products" ON public.products;
DROP POLICY "Admins edit products" ON public.products;
DROP POLICY "Admins delete products" ON public.products;
CREATE POLICY "Published products are public" ON public.products FOR SELECT TO anon, authenticated USING (published = true OR private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins create products" ON public.products FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins edit products" ON public.products FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'admin')) WITH CHECK (private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete products" ON public.products FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'admin'));
DROP FUNCTION public.has_role(UUID, public.app_role);
-- Ítaca: modelo inicial de sincronização multi-dispositivo.
-- Execute somente no projeto Supabase correto após conectar sua conta.
create table if not exists public.itaca_user_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  payload jsonb not null default '{"sessions":[],"recovery":[],"logs":[]}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.itaca_user_data enable row level security;
drop policy if exists "Users can read own Ítaca data" on public.itaca_user_data;
create policy "Users can read own Ítaca data" on public.itaca_user_data for select using (auth.uid() = user_id);
drop policy if exists "Users can insert own Ítaca data" on public.itaca_user_data;
create policy "Users can insert own Ítaca data" on public.itaca_user_data for insert with check (auth.uid() = user_id);
drop policy if exists "Users can update own Ítaca data" on public.itaca_user_data;
create policy "Users can update own Ítaca data" on public.itaca_user_data for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
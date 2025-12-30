-- Create waitlist table for email signups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup)
CREATE POLICY "Anyone can sign up to waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Only admins could read the list (future feature)
CREATE POLICY "No public read access" 
ON public.waitlist 
FOR SELECT 
USING (false);
const SUPABASE_URL = "https://prltjzwguleuaexpcbvi.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_VRAhrIDUBjoHwqejdo4clA_2KHiGZDf";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

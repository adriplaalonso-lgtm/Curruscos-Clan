const SUPABASE_URL = "https://prltjzwguleuaexpcbvi.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_VRAhrIDUBjoHwqejdo4clA_2KHiGZDf";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

async function testSupabaseConnection() {
    const { data, error } = await supabaseClient
        .from("groups")
        .select("id")
        .limit(1);

    if (error) {
        console.error("Error conectando con Supabase:", error);
        return;
    }

    console.log("Supabase conectado correctamente:", data);
}

testSupabaseConnection();

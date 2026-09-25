console.log("SUPABASE.JS SE HA CARGADO");

const SUPABASE_URL = "https://prltjzwguleuaexpcbvi.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_VRAhrIDUBjoHwqejdo4clA_2KHiGZDf";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);


// ========================================
// USUARIO ACTUAL
// ========================================

async function getCurrentUser() {

    const {
        data: { user },
        error
    } = await supabaseClient.auth.getUser();

    if (error) {
        console.error("Error obteniendo usuario:", error);
        return null;
    }

    return user;
}


// ========================================
// PERFIL ACTUAL
// ========================================

async function getCurrentProfile() {

    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    const { data, error } = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    if (error) {
        console.error("Error obteniendo perfil:", error);
        return null;
    }

    return data;
}


// ========================================
// GRUPO ACTUAL
// ========================================

async function getCurrentGroup() {

    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    const { data, error } = await supabaseClient
        .from("group_members")
        .select(`
            role,
            groups (
                id,
                name,
                description
            )
        `)
        .eq("user_id", user.id)
        .single();

    if (error) {
        console.error("Error obteniendo grupo:", error);
        return null;
    }

    return {
        id: data.groups.id,
        name: data.groups.name,
        description: data.groups.description,
        role: data.role
    };
}


// ========================================
// PRUEBA DE CONEXIÓN
// ========================================

async function testSupabaseConnection() {

    const user = await getCurrentUser();

    console.log(
        "Supabase conectado correctamente.",
        user ? "Usuario autenticado." : "Sin usuario autenticado."
    );
}

testSupabaseConnection();

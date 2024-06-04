
import { supabase } from '../../services/supabase'

export async function GET() {
    const { data, error } = await supabase.from('users').select()
    return new Response(JSON.stringify({ data }), {
        headers: { 'Content-Type': 'application/json' },
    });
}
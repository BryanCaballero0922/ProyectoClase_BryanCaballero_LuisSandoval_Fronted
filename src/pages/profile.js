import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

function Profile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        // Obtener el usuario actual de la sesión de Supabase
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          setUser(user);
          // Obtener el perfil correspondiente de nuestra tabla 'profiles'
          let { data, error, status } = await supabase
            .from('profiles')
            .select(`full_name, role`)
            .eq('id', user.id)
            .single();

          if (error && status !== 406) {
            throw error;
          }

          if (data) {
            setProfile(data);
          }
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="container text-center mt-5">Cargando perfil...</div>;
  }

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title text-center">Mi Perfil</h2>
        </div>
        <div className="card-body">
          {user && (
            <div>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          )}
          {profile && (
            <div>
              <p><strong>Nombre Completo:</strong> {profile.full_name || 'No especificado'}</p>
              <p><strong>Rol:</strong> <span className="badge bg-success">{profile.role}</span></p>
            </div>
          )}
           <p className="text-muted mt-4">
            Esta es la información de tu perfil. Próximamente podrás actualizar tus datos desde aquí.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;


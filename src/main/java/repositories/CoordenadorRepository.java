package repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import models.Coordenador;
@Repository
public interface CoordenadorRepository extends JpaRepository<Coordenador, Long> {
    Coordenador findByEmail(String email);
}


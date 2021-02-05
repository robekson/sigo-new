package br.sigo.aplicacao.repository;

import br.sigo.aplicacao.domain.Venda;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Venda entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VendaRepository extends JpaRepository<Venda, Long>, JpaSpecificationExecutor<Venda> {
}

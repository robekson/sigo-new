package br.sigo.aplicacao.service;

import br.sigo.aplicacao.service.dto.ProdutoDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing {@link br.sigo.aplicacao.domain.Produto}.
 */
public interface ProdutoService {

    /**
     * Save a produto.
     *
     * @param produtoDTO the entity to save.
     * @return the persisted entity.
     */
    ProdutoDTO save(ProdutoDTO produtoDTO);

    /**
     * Get all the produtos.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<ProdutoDTO> findAll(Pageable pageable);


    /**
     * Get the "id" produto.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<ProdutoDTO> findOne(Long id);

    /**
     * Delete the "id" produto.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}

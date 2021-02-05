package br.sigo.aplicacao.web.rest;

import br.sigo.aplicacao.service.CompraService;
import br.sigo.aplicacao.web.rest.errors.BadRequestAlertException;
import br.sigo.aplicacao.service.dto.CompraDTO;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link br.sigo.aplicacao.domain.Compra}.
 */
@RestController
@RequestMapping("/api")
public class CompraResource {

    private final Logger log = LoggerFactory.getLogger(CompraResource.class);

    private static final String ENTITY_NAME = "compra";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final CompraService compraService;

    public CompraResource(CompraService compraService) {
        this.compraService = compraService;
    }

    /**
     * {@code POST  /compras} : Create a new compra.
     *
     * @param compraDTO the compraDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new compraDTO, or with status {@code 400 (Bad Request)} if the compra has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/compras")
    public ResponseEntity<CompraDTO> createCompra(@Valid @RequestBody CompraDTO compraDTO) throws URISyntaxException {
        log.debug("REST request to save Compra : {}", compraDTO);
        if (compraDTO.getId() != null) {
            throw new BadRequestAlertException("A new compra cannot already have an ID", ENTITY_NAME, "idexists");
        }
        CompraDTO result = compraService.save(compraDTO);
        return ResponseEntity.created(new URI("/api/compras/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /compras} : Updates an existing compra.
     *
     * @param compraDTO the compraDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated compraDTO,
     * or with status {@code 400 (Bad Request)} if the compraDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the compraDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/compras")
    public ResponseEntity<CompraDTO> updateCompra(@Valid @RequestBody CompraDTO compraDTO) throws URISyntaxException {
        log.debug("REST request to update Compra : {}", compraDTO);
        if (compraDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        CompraDTO result = compraService.save(compraDTO);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, compraDTO.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /compras} : get all the compras.
     *
     * @param eagerload flag to eager load entities from relationships (This is applicable for many-to-many).
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of compras in body.
     */
    @GetMapping("/compras")
    public List<CompraDTO> getAllCompras(@RequestParam(required = false, defaultValue = "false") boolean eagerload) {
        log.debug("REST request to get all Compras");
        return compraService.findAll();
    }

    /**
     * {@code GET  /compras/:id} : get the "id" compra.
     *
     * @param id the id of the compraDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the compraDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/compras/{id}")
    public ResponseEntity<CompraDTO> getCompra(@PathVariable Long id) {
        log.debug("REST request to get Compra : {}", id);
        Optional<CompraDTO> compraDTO = compraService.findOne(id);
        return ResponseUtil.wrapOrNotFound(compraDTO);
    }

    /**
     * {@code DELETE  /compras/:id} : delete the "id" compra.
     *
     * @param id the id of the compraDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/compras/{id}")
    public ResponseEntity<Void> deleteCompra(@PathVariable Long id) {
        log.debug("REST request to delete Compra : {}", id);
        compraService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}

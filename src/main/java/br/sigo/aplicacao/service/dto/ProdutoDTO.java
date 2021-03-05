package br.sigo.aplicacao.service.dto;

import javax.validation.constraints.*;
import java.io.Serializable;

/**
 * A DTO for the {@link br.sigo.aplicacao.domain.Produto} entity.
 */
public class ProdutoDTO implements Serializable {
    
    private Long id;

    @NotNull
    private String referencia;

    @NotNull
    private String nome;

    private String cores;

    private String insumo;
    
    private String materiaPrimaNome;

	private Long materiaPrimaId;

    private Long vendaId;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReferencia() {
        return referencia;
    }

    public void setReferencia(String referencia) {
        this.referencia = referencia;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCores() {
        return cores;
    }

    public void setCores(String cores) {
        this.cores = cores;
    }

    public String getInsumo() {
        return insumo;
    }

    public void setInsumo(String insumo) {
        this.insumo = insumo;
    }

    public Long getMateriaPrimaId() {
        return materiaPrimaId;
    }

    public void setMateriaPrimaId(Long materiaPrimaId) {
        this.materiaPrimaId = materiaPrimaId;
    }

    public Long getVendaId() {
        return vendaId;
    }

    public void setVendaId(Long vendaId) {
        this.vendaId = vendaId;
    }
    
    
    public String getMateriaPrimaNome() {
  		return materiaPrimaNome;
  	}

  	public void setMateriaPrimaNome(String materiaPrimaNome) {
  		this.materiaPrimaNome = materiaPrimaNome;
  	}

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ProdutoDTO)) {
            return false;
        }

        return id != null && id.equals(((ProdutoDTO) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "ProdutoDTO{" +
            "id=" + getId() +
            ", referencia='" + getReferencia() + "'" +
            ", nome='" + getNome() + "'" +
            ", cores='" + getCores() + "'" +
            ", insumo='" + getInsumo() + "'" +
            ", materiaPrimaId=" + getMateriaPrimaId() +
            ", vendaId=" + getVendaId() +
            "}";
    }
}

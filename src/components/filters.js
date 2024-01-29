import React from 'react'

const Filters = ({ priceFilter, onPriceFilterChange, onSizeFilterChange }) => {
    return (
        <div className="container">
            <div className="filter-section">
                <div className="filter-label">Filtrer par prix :</div>
                <select
                    className="filter-select"
                    value={priceFilter}
                    onChange={onPriceFilterChange}
                >
                    <option value="all">Tous</option>
                    <option value="20">Moins de 20€</option>
                    <option value="50">Moins de 50€</option>
                    <option value="moreThan50">Plus de 50€</option>
                </select>
                <div className="filter-label">Filtrer par genre :</div>
                <select
                    className="filter-select"
                    onChange={onSizeFilterChange}
                >
                    <option value="all">Toutes</option>
                    <option value="Action">Action</option>
                    <option value="Musique">Musique</option>
                    <option value="Détente">Détente</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
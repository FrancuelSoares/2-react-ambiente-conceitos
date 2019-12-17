import React from 'react';
import PropTypes from 'prop-types';

// { tech } ou this.props.tech
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Não definido'
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";

export default function NotesTooltip({identifier, notes}) {
    return (
        <span data-for={identifier} data-tip>
            <i className="fa fa-info-circle"></i>
            <ReactTooltip id={identifier} type="info" class="tool-tip" effect="solid">
                <span>{notes}</span>
            </ReactTooltip>
        </span>
    );

}

NotesTooltip.propTypes = {
    identifier: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
};



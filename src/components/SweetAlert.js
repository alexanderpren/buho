import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";




export default function QuestionAlert({title, handleAccept,handleContinue, question}) {
  return (
    <div>
      <SweetAlert
        warning
        title={title}
        showCancel
        confirmBtnText="Aceptar"
        confirmBtnBsStyle="danger"
        cancelBtnText="Cancelar"
        cancelBtnBsStyle="default"
        onConfirm={handleAccept}
        onCancel={handleContinue}
      >
        {question}
      </SweetAlert>
    </div>
  );
}

import {
  CButton, CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from '@coreui/react'
import React from 'react'

export default function Modal({ title, content, submitText, cancelText, open, setOpen, action, onSubmit, onCancel }) {

  const color = () => {
    switch (action) {
      case "View": return "info";
      case "Create": return "success";
      case "Update": return "warning";
      case "Delete": return "danger";
      case "Shipped": return "success";
      case "Cancelled": return "danger";
      case "Received": return "success";
      case "Cancel": return "danger";
      default: return "info";
    }
  };

  return (
    <>
      <CModal visible={open} onClose={() => { setOpen(false); onCancel && onCancel() }}>
        <CModalHeader>
          <CModalTitle className={`text-${color()}`}>
            {title || "Title"}
          </CModalTitle>
        </CModalHeader>

        <CModalBody>
          {content}
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={() => { setOpen(false); onCancel && onCancel() }}>
            {cancelText || "Cancel"}
          </CButton>

          {action !== "View" ? (
            <CButton color={color()} onClick={onSubmit}>
              {submitText || "Submit"}
            </CButton>
          ) : ""}
        </CModalFooter>
      </CModal>
    </>
  )
}

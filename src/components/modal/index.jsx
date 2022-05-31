import {
  CButton, CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from '@coreui/react'
import React from 'react'

export default function Modal({ title, content, submitText, cancelText, open, setOpen, action, onSubmit }) {

  const color = () => {
    switch (action) {
      case "View": return "info";
      case "Shipped": return "success";
      case "Cancelled": return "danger";
      case "Update": return "warning";
      case "Delete": return "danger";
      default: return "info";
    }
  };

  return (
    <>
      <CModal visible={open} onClose={() => setOpen(false)}>
        <CModalHeader>
          <CModalTitle className={`text-${color()}`}>
            {title || "Title"}
          </CModalTitle>
        </CModalHeader>

        <CModalBody>
          {content}
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setOpen(false)}>
            {cancelText || "Cancel"}
          </CButton>

          {action != "View" ? (
            <CButton color={color()} onClick={onSubmit}>
              {submitText || "Submit"}
            </CButton>
          ) : ""}
        </CModalFooter>
      </CModal>
    </>
  )
}

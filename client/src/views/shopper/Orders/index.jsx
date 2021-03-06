import { cilCheckAlt, cilNewspaper, cilX } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton, CButtonGroup, CFormInput, CImage, CInputGroup, CInputGroupText, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTooltip, CTableRow, CTableFoot } from '@coreui/react';
import React, { useState } from 'react';
import Content from '../../../components/content';
import Modal from '../../../components/modal';

export default function Orders() {

  const orders = [
    { id: 1, order: 954982, notes: "Send a red color one", value: 60, location: "Amman", status: 'Done' },
    { id: 2, order: 165416, notes: "Send ASPA please", value: 90, location: "Irbid", status: 'Shipping' },
  ];

  const [open, setOpen] = useState(false)
  const [action, setAction] = useState("View")
  const [detailsData, setDetailsData] = useState({})

  const actionsClick = (data, action) => {
    setOpen(true)
    setAction(action)
    setDetailsData(data)
  };

  const modalContent = () => (<>
    {Object.keys(detailsData).map((key, i) => key === "image" ? (
      <>
        <CInputGroup className="mb-3" key={i}>
          <CInputGroupText className='text-capitalize'>{key}</CInputGroupText>
          <CImage src={detailsData[key]} width={250} />
        </CInputGroup>
      </>
    ) : key !== "id" && (
      <CInputGroup className="mb-3" key={i}>
        <CInputGroupText className='text-capitalize'>{key}</CInputGroupText>
        <CFormInput defaultValue={detailsData[key]} disabled={action !== "Update"} />
      </CInputGroup>
    ))}
  </>);

  const onSubmit = () => {
    action === "Update" ? (
      console.log("Updating")
    ) : action === "Delete" ? (
      console.log("Deleteing")
    ) :
      console.log("Undefined Action")
  };

  return (
    <Content
      title={"My Orders"}
      content={
        <>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>#</CTableHeaderCell>
                <CTableHeaderCell>Order Id</CTableHeaderCell>
                <CTableHeaderCell>Value</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {orders.map(listing => (
                <CTableRow className='align-middle'>
                  <CTableHeaderCell>{listing.id}</CTableHeaderCell>

                  <CTableDataCell>#{listing.order}</CTableDataCell>

                  <CTableDataCell>${listing.value}</CTableDataCell>

                  <CTableDataCell>{listing.status}</CTableDataCell>

                  <CTableDataCell>
                    <CButtonGroup size="sm">
                      <CTooltip
                        content="View"
                        placement="top"
                      >
                        <CButton color="info" onClick={() => actionsClick(listing, "View")}>
                          <CIcon className='text-light' icon={cilNewspaper} />
                        </CButton>
                      </CTooltip>

                      <CTooltip
                        content="Mark as Received"
                        placement="top"
                      >
                        <CButton color="success" onClick={() => actionsClick(listing, "Received")}>
                          <CIcon className='text-white' icon={cilCheckAlt} />
                        </CButton>
                      </CTooltip>

                      <CTooltip
                        content="Cancel the Order"
                        placement="top"
                      >
                        <CButton color="danger" onClick={() => actionsClick(listing, "Cancel")}>
                          <CIcon className='text-white' icon={cilX} />
                        </CButton>
                      </CTooltip>
                    </CButtonGroup>

                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>

            <CTableFoot>
              <CTableRow>
                <CTableHeaderCell></CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
                <CTableHeaderCell>
                  {"Total"}
                  <br />
                  {"$"}
                  {orders.reduce((sum, order) => sum + order.value, 0)}
                </CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
                <CTableHeaderCell></CTableHeaderCell>
              </CTableRow>
            </CTableFoot>
          </CTable>

          <Modal title={`Order ${action}`} body="Body" open={open} setOpen={setOpen} action={action} data={detailsData} content={modalContent()} onSubmit={() => onSubmit()} />
        </>
      }
    />
  )
}

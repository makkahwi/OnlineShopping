import { cilCheckAlt, cilNewspaper, cilX } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CButton, CButtonGroup, CFormInput, CImage, CInputGroup, CInputGroupText, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTooltip, CTableRow, CTableFoot } from '@coreui/react';
import React, { useState } from 'react';
import Content from '../../../components/content';
import Modal from '../../../components/modal';

export default function Orders() {

  const orders = [
    { id: 1, customer: 954982, notes: "Send a red color one", value: 60, location: "Amman", status: 'Done' },
    { id: 2, customer: 165416, notes: "Send ASPA please", value: 90, location: "Irbid", status: 'Shipping' },
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
    action === "Shipped" ? (
      console.log("Shipping", detailsData)
    ) : action === "Cancelled" ? (
      console.log("Cancelling", detailsData)
    ) :
      console.log("Undefined Action")
  };

  return (
    <Content
      title={"Customer Orders"}
      content={
        <>
          <CTable hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>#</CTableHeaderCell>
                <CTableHeaderCell>Customer Id</CTableHeaderCell>
                <CTableHeaderCell>Value</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>

            <CTableBody>
              {orders.map((order, i) => (
                <CTableRow className='align-middle' key={i}>
                  <CTableHeaderCell>{order.id}</CTableHeaderCell>

                  <CTableDataCell>#{order.customer}</CTableDataCell>

                  <CTableDataCell>${order.value}</CTableDataCell>

                  <CTableDataCell>{order.status}</CTableDataCell>

                  <CTableDataCell>
                    <CButtonGroup size="sm">
                      <CTooltip
                        content="View"
                        placement="top"
                      >
                        <CButton color="info" onClick={() => actionsClick(order, "View")}>
                          <CIcon className='text-light' icon={cilNewspaper} />
                        </CButton>
                      </CTooltip>

                      <CTooltip
                        content="Mark as Shipped Out"
                        placement="top"
                      >
                        <CButton color="success" onClick={() => actionsClick(order, "Shipped")}>
                          <CIcon className='text-white' icon={cilCheckAlt} />
                        </CButton>
                      </CTooltip>

                      <CTooltip
                        content="Mark as Cancelled"
                        placement="top"
                      >
                        <CButton color="danger" onClick={() => actionsClick(order, "Cancelled")}>
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

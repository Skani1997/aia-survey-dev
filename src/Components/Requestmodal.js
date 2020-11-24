import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'



const Requestmodal = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<button className="btn_request ui large button">상담 요청하기</button>}
    >
      <Modal.Header>드림캘린더 상담 요청하기</Modal.Header>
      <Modal.Content image scrolling>

        <Modal.Description>
          <p>
            이부분이 상담요청하는 부분입니다
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          신청하기 <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Requestmodal;
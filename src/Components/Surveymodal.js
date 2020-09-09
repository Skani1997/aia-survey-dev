import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

const Surveymodal = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<button className="btn_survey ui large button">설문 시작</button>}
    >
      <Modal.Header>설문 시작하기</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
          <p>
            이부분이 설문시작할때 핀번호 전화번호 넣는부분 입니다
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          설문 시작 <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default Surveymodal;
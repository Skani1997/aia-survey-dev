import React from 'react'
import { Link } from "react-router-dom";
import '../css/Surveymodal.css';
import { Button, Icon, Modal } from 'semantic-ui-react'

const Surveymodal = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<button className="btn_survey ui large button">설문시작</button>}
    >
      <Modal.Header className="modal-title">설문 시작하기</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
          <form>
            <label for ="pin-num">핀 번호</label>
            <input id="pin-num" type="text" name="pinNum" />
            <label for ="phone">전화번호</label>
            <input id="phone" type="text" name="phone"/>
          </form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Link to="/surveypage">
          <Button className="survey-btn">
            설문 시작 <Icon name='chevron right' />
          </Button>
        </Link>
      </Modal.Actions>
    </Modal>
  )
}

export default Surveymodal;
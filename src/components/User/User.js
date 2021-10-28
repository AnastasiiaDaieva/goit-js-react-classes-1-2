import { UserMenu } from './UserMenu';
import { Friends } from '../Friends/Friends';
import PropTypes from 'prop-types';
import './User.css';
import { Button } from 'react-bootstrap';
import s from './User.module.css';
import styled from 'styled-components';
import { Icons } from '../Icons';
import img1 from '../../images/Image_Cover.jpg';

const Styles = styled.div`
  .styledBtn {
    background: grey;
    color: white;
  }
`;

function User({ name, age, friends, myMethod }) {
  console.log(name);
  return (
    <>
      <div className="wrapper">
        <img src={img1}></img>
        <ul>
          <li>
            <Icons
              name="hero"
              className="zuzuzu"
              color="blue"
              stroke="gold"
              width="64"
              height="100"
            />
          </li>
          <li>
            <Icons
              name="instagram-icon"
              className="zuzuzu"
              color="pink"
              stroke="gold"
              width="64"
              height="100"
            />
          </li>
        </ul>
      </div>
      {/* {name ? <h1>{name}</h1> : <p>Имя не передано</p>}
      <p>{age}</p> */}
      <UserMenu />
      <Styles>
        <button type="button" className="userBtn styledBtn" onClick={myMethod}>
          click
        </button>
      </Styles>
      <Button
        style={{ background: 'yellow' }}
        // className="btn"
        className={s.moduleBtn}
        variant="success"
      >
        Success
      </Button>
      {/* <Friends friends={friends} /> */}
      <Friends friends={friends}>
        <p> Friends</p>
        <p>Simple children</p>
        text
      </Friends>
    </>
  );
}

export default User;
// the best practice than destructuring name = 'new' or {name ? <h1>{name}</h1> : <p>Имя не передано</p>}
User.defaultProps = { name: 'New User' };

User.propTypes = {
  name: PropTypes.string.isRequired,
  friends: PropTypes.array,
};

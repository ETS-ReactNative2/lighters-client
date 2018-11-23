import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import M from 'materialize-css';

import Logo from '../../images/logo12.svg';
import { logout, setAdmin, setStudent, setTeacher } from "../../actions/users_actions.js";

class Header extends Component {
  constructor(props) {
    super(props);

    this.dropdown = React.createRef();

    this.setStudent = this.setStudent.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
    M.Dropdown.init(this.dropdown.current, {
      belowOrigin: true, // Displays dropdown below the button
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      gutter: 0, // Spacing from edge
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
    });
  }

  setStudent() {
    this.props.setStudent();
  }

  logout() {
    this.props.logout();
  }

  render() {
    let path = "";
    let accountDropdown = <div className="dp-content">
                            <a onClick={this.logout}><div>退出</div></a>
                          </div>;
    let links = <li><a onClick={this.logout}>退出</a></li>;

    /*----- render header for corresponding user -----*/
    if(this.props.auth.isAuthenticated) {
      // authenticated user

      /*----- define path and dropdown for corresponding user -----*/
      // let user_id = this.props.auth.user.userTokenData.id;
      if(this.props.auth.user.userTokenData.identity === "admin") {
        // admin
        path = <li><Link to="/users/admin/dashboard">管理员面板</Link></li>
      } else if(this.props.auth.user.userTokenData.identity === "teacher") {
        // teachers
        path = _.isEmpty(this.props.auth.identityData) ? <li><Link to={`/teachers/new`}>我的主页</Link></li> : <li><Link to={`/teachers/${this.props.auth.identityData._id}/dashboard`}>我的主页</Link></li>;
        accountDropdown = <div className="dp-content">
                            <Link to={`/teachers/${this.props.auth.identityData._id}`}><div>我的资料</div></Link>
                            <Link to={`/teachers/${this.props.auth.identityData._id}/edit`}><div>编辑个人资料</div></Link>
                            <a href="#!"><div>账号设置</div></a>
                            <a onClick={this.logout}><div>退出</div></a>
                          </div>;
      } else {
        // students
        path = _.isEmpty(this.props.auth.identityData) ? <li><Link to={`/students/new`}>我的主页</Link></li> : <li><Link to={`/students/${this.props.auth.identityData._id}/dashboard`}>我的主页</Link></li>;
        accountDropdown = <div className="dp-content">
                            <Link to={`/teachers/${this.props.auth.identityData._id}`}><div>我的资料</div></Link>
                            <Link to={`/teachers/${this.props.auth.identityData._id}/edit`}><div>编辑个人资料</div></Link>
                            <a href="#!"><div>账号设置</div></a>
                            <a onClick={this.logout}><div>退出</div></a>
                          </div>;
      }

      links = <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/advantage">课程体系</Link></li>
                <li><Link to="/login">上课流程</Link></li>
                <li><Link to="/login">关于我们</Link></li>
                {path}
                <li className="dp"><a href=''>更多<i className="material-icons right">arrow_drop_down</i></a>
                  {accountDropdown}
                </li>
              </ul>;
    } else {
      // unauthenticated user
      links = <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/advantage">成为老师</Link></li>
                <li><Link to="/advantage">课程体系</Link></li>
                <li><Link to="/login">上课流程</Link></li>
                <li><Link to="/login">关于我们</Link></li>
                <li><Link to="/signup" className="waves-effect waves-light btn" style={{fontSize: "18px"}} onClick={this.setStudent}>申请免费试课</Link></li>
                <li><Link to="/login">登录</Link></li>
              </ul>;
    }

    let classes = this.props.action === "mainpage" ? "transparent-nav non-box-shadow" : "amber";

    return (
      <nav className={classes}>
        <div className="nav-wrapper">
        
          <Link to="/">
            <img className="brand-logo" src={Logo} alt="lighters-logo" style={{width: "300px", marginTop: "8px", marginLeft: "5px"}} />
          </Link>
          {links}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    identity: state.identity,
    auth: state.auth
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout())
    },
    setAdmin: () => {dispatch(setAdmin())},
    setTeacher: () => {dispatch(setTeacher())},
    setStudent: () => {dispatch(setStudent())}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import React, { Component } from 'react';
import '../../css/App.css';
import M from 'materialize-css';
import FormInput from '../forms/FormInput';
import FormSelect from '../forms/FormSelect';
import FormCheck from '../forms/FormCheck';

class StudentForm extends Component {
  constructor(props) {
    super(props)

    this.lastnameValue = React.createRef();
    this.firstnameValue = React.createRef();
    this.englishnameValue = React.createRef();
    this.ageValue = React.createRef();
    this.birthdayValue = React.createRef();
    this.genderValue = React.createRef();
    this.cityValue = React.createRef();
    this.schoolnameValue = React.createRef();
    this.levelValue = React.createRef();
    this.timeValue = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getInputData = this.getInputData.bind(this);
  }

  handleChange = (e) => {

  }

  getInputData = (elem, val) => {
    console.log("parent: ", val);
  }

  handleSubmit = () => {

  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col s12 m10 offset-m1">
            <div className="card r-box-shadow">
              <div className="card-content" style={{padding: "50px"}}>
                <span className="card-title">学员基本信息</span>
                <div className="row">
                  <FormInput
                    classes="input-field col m6 s12"
                    name="lastname"
                    inputType="text"
                    label="姓"
                    required={true}
                    errorMsg="请输入姓"
                    getInputData={this.getInputData}
                  />
                  <FormInput
                    classes="input-field col m6 s12"
                    name="firstname"
                    inputType="text"
                    label="名"
                    required={true}
                    errorMsg="请输入名字"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormInput
                    classes="input-field col m12 s12"
                    name="englishname"
                    inputType="text"
                    label="英文名(如果没有请留白)"
                    required={false}
                    errorMsg=""
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormInput
                    classes="input-field col m12 s12"
                    name="age"
                    inputType="number"
                    label="年龄"
                    required={true}
                    errorMsg="请输入年龄"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormInput
                    classes="datepicker input-field col m12 s12"
                    name="student_birthday"
                    inputType="text"
                    label="出生日期"
                    required={true}
                    errorMsg="请选择出生年月"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormSelect
                    classes="input-field col m12 s12"
                    name="gender"
                    label="性别"
                    required={true}
                    prompt="选择性别"
                    options={["男", "女"]}
                    errorMsg="请选择性别"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormInput
                    classes="input-field col m12 s12"
                    name="city"
                    inputType="text"
                    label="所在城市"
                    required={true}
                    errorMsg="请输入所在城市"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormInput
                    classes="input-field col m12 s12"
                    name="schoolname"
                    inputType="text"
                    label="孩子所在学校的名称"
                    required={true}
                    errorMsg="请输入孩子所在学校的名称"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormCheck 
                    classes="col m12"
                    name="schoolstatus"
                    inputType="radio"
                    label="孩子所在学校性质"
                    required={true}
                    options={["国内公立", "国内私立", "国际学校"]}
                    otherOption={false}
                    otherLabel=""
                    errorMsg="请至少选择一项"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormInput
                    classes="input-field col m12 s12"
                    name="level"
                    inputType="text"
                    label="目前所在年级 (例如: 幼儿园中班， 小学三年级)"
                    required={true}
                    errorMsg="请输入孩子目前所在年级"
                    getInputData={this.getInputData}
                  />
                </div>
                
                <div className="row">
                  <FormInput
                    classes="input-field col m12 s12"
                    name="time"
                    inputType="text"
                    label="孩子学英语时长"
                    required={true}
                    errorMsg="请输入孩子学英语时长"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormCheck 
                    classes="col m12"
                    name="estimate"
                    inputType="radio"
                    label="您对孩子目前英语水平的自我评价"
                    required={true}
                    options={["优秀", "中上水平", "中等水平", "中下水平", "靠后"]}
                    otherOption={true}
                    otherLabel="其他, 请说明"
                    errorMsg="请至少选择一项"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormCheck 
                    classes="col m12"
                    name="expectation"
                    inputType="checkbox"
                    label="您对孩子英文学习的期望：可多选，依照重要程度来排列 (5星为您觉得最重要) (打分题 请填1-5数字打分)"
                    required={true}
                    options={["提高英语应试成绩", "培养对英文及英语学习的兴趣", "会听会说 (不是应试英语，哑巴英语)", "会写", "积累词汇量", "养成(中英文)阅读习惯", "了解西方文化", "为出国学习做准备"]}
                    otherOption={false}
                    otherLabel=""
                    errorMsg="请至少选择一项"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormCheck 
                    classes="col m12"
                    name="dailyreading"
                    inputType="radio"
                    label="是否有每日阅读 (中英文均可) 的习惯 (包括亲子阅读) 并填写每日阅读时间"
                    required={true}
                    options={["没有"]}
                    otherOption={true}
                    otherLabel="有。每日阅读时间为"
                    errorMsg="请至少选择一项"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormCheck 
                    classes="col m12"
                    name="currentreadingstatus"
                    inputType="radio"
                    label="如果没有每日阅读,那么目前的阅读状况是"
                    required={true}
                    options={["几乎没有阅读习惯", "偶尔读书"]}
                    otherOption={true}
                    otherLabel="其他情况请说明"
                    errorMsg="请至少选择一项"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormCheck 
                    classes="col m12"
                    name="penglishlevel"
                    inputType="radio"
                    label="家长本身英语水平"
                    required={true}
                    options={["精通英语", "辅助孩子英语学习和读书够用", "出国旅游够用", "几乎不懂"]}
                    otherOption={false}
                    otherLabel=""
                    errorMsg="请至少选择一项"
                    getInputData={this.getInputData}
                  />
                </div>

                <div className="row">
                  <FormCheck 
                    classes="col m12"
                    name="custody"
                    inputType="radio"
                    label="自己对孩子的英语学习"
                    required={true}
                    options={["可以做到每天监督，圆满配合老师的任务", "可以下载资料，剩下的工作要靠孩子自己完成，自己并不能给其他的帮助", "自己太忙了，没空管孩子学习"]}
                    otherOption={false}
                    otherLabel=""
                    errorMsg="请至少选择一项"
                    getInputData={this.getInputData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m10 offset-m1">
            <h6 className="center form-validation-msg" style={{padding: "20px 20px 20px 20px", backgroundColor: "#f39c12", color: "white"}}>请确认所有必填项目都有填写</h6>
            <div className="actions">
              <button onClick={this.handleSubmit} className='btn-large disabled submit-button'>提交</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentForm;
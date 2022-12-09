import { CheckCircle, LabelImportant, MoveToInbox, UnfoldMore } from '@material-ui/icons';
import {IconButton} from "@material-ui/core";
import React from 'react';
import "./Mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {useHistory} from "react-router-dom";

function Mail() {
    const history = useHistory()
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={()=> history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="mail__toolsRight">
                    <IconButton><UnfoldMoreIcon /></IconButton>
                    <IconButton><PrintIcon /></IconButton>
                    <IconButton><ExitToAppIcon /></IconButton>
                </div>
            </div>

            <div className="mail__body">
                    <div className="mail__bodyHeader">
                        <h2>Provisional Results</h2>
                        <LabelImportantIcon className="mail__important"/>
                        <p>ssc.Do-Not-Reply@mail.lse.ac.uk</p>
                        <p className="mail__time">1:20pm</p>
                    </div>
                    <div className="mail__message">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" >
                    <tbody><tr><td align="center"><img data-imagetype="External" src="https://preview-ilse.cloud.contensis.com/staff/divisions/academic-registrars-division/systems/Assets/Images/blueHeader.jpg" width="600" height="84" /> 
                    </td></tr><tr><td align="center"><table bgcolor="#fff" align="center" border="0" cellpadding="0" cellspacing="0" width="600" style={{fontFamily:"Arial", borderCollapse:"collapse"}}>
                    <tbody><tr><td bgcolor="#ffffff" style={{padding: "10px 0 40px 0"}}><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style={{padding:"0px 0px 0px 00px"}}>
                    
                    <p style={{margin: "10px 0"}}>Dear Student</p>
                    
                    <p>This email provides you with your <b>provisional</b> marks. This means that they have not been confirmed by the relevant Boards of Examiners and may, therefore, change. The Student Services Centre cannot accept responsibility for any issues arising from changes to these provisional marks.</p>
                    
                    <table style={{margin: "10px 0"}}><thead><tr><th>Course Code</th><th>Course Name</th><th>Mark</th><th>Grade</th></tr></thead><tbody>
                    <tr><td><b>EC308</b></td><td><b>Principles of Behavioural Economics</b></td><td><b style={{display:"block", textAlign:"center"}}>-20</b></td><td><b style={{display:"block", textAlign:"center"}}>-1</b></td></tr><tr><td></td><td>January Exam</td><td><span style={{display:"block", textAlign:"center"}}>9</span></td></tr><tr><td></td><td>Summer Exam</td><td><span style={{display:"block", textAlign:"center"}}>-31</span></td></tr><tr><td></td><td>Coursework (Mt And Lt)</td><td><span style={{display:"block", textAlign:"center"}}>-2</span></td></tr>
                    <tr><td><b>EC310</b></td><td><b>Behavioural Economics I</b></td><td><b style={{display:"block", textAlign:"center"}}>8</b></td><td><b style={{display:"block", textAlign:"center"}}>0</b></td></tr><tr><td></td><td>January Exam</td><td><span style={{display:"block", textAlign:"center"}}>19</span></td></tr><tr><td></td><td>Summer Exam</td><td><span style={{display:"block", textAlign:"center"}}>2</span></td></tr>
                    <tr><td><b>EC311</b></td><td><b>Behavioural Economics II</b></td><td><b style={{display:"block", textAlign:"center"}}>-12</b></td><td><b style={{display:"block", textAlign:"center"}}>-1</b></td></tr><tr><td></td><td>January Exam</td><td><span style={{display:"block", textAlign:"center"}}>-50</span></td></tr><tr><td></td><td>Summer Exam</td><td><span style={{display:"block", textAlign:"center"}}>34</span></td></tr>
                    <tr><td><b>EC312</b></td><td><b>Behavioural Economics Analysis</b></td><td><b style={{display:"block", textAlign:"center"}}>-59</b></td><td><b style={{display:"block", textAlign:"center"}}>-1</b></td></tr><tr><td></td><td>Summer Exam</td><td><span style={{display:"block", textAlign:"center"}}>-67</span></td></tr><tr><td></td><td>Continuous Assessment (Mt And Lt)</td><td><span style={{display:"block", textAlign:"center"}}>0</span></td></tr></tbody></table>
                    
                    <p style={{margin: "10px 0"}}>(Grade Key: NA = Deferred; AB = 0-Absent; I = 0-Incomplete; F = 0-Fail)</p><p>It will not be possible for the Student Services Centre to enter into correspondence about <b>provisional</b> marks. You cannot challenge or appeal against provisional marks, or request an administrative mark check for them. This email cannot be used as an official record of your marks.</p><p>If you have any questions, please raise them with your Academic Department.</p>
                    <p style={{margin: "10px 0"}}>Your final <span data-markjs="true" class="mark729y574y5" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style={{color: "black"}}>result</span>s will be released in LSE for You on 14 July 2022. If you do not pass a course, you will receive further information on 14 July 2022 about your options. Information about challenging your confirmed <span data-markjs="true" class="mark729y574y5" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style={{color: "black"}}>result</span>s once they are released on 14 July can be found <a href="https://info.lse.ac.uk/current-students/services/assessment-and-results/results/challenging-results-and-appeals" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-safelink="true" data-linkindex="0">here</a>.</p>
                    <p style={{margin: "10px 0"}}>In the meantime you can find answers to the most common queries as well as some useful information here:</p><p>- <a href="https://info.lse.ac.uk/current-students/services/assessment-and-results/results/understanding-results" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-safelink="true" data-linkindex="1">Understanding my <span data-markjs="true" class="mark729y574y5" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style={{color: "black"}}>result</span>s</a></p>
                    <p style={{margin: "10px 0"}}>- <a href="https://info.lse.ac.uk/current-students/what-if/dont-progress" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" data-safelink="true" data-linkindex="2">What if I don’t progress</a></p>
                    <p style={{margin: "10px 0"}}>Regards,</p><p>The <span data-markjs="true" class="mark729y574y5" data-ogac="" data-ogab="" data-ogsc="" data-ogsb="" style={{color: "black"}}>Result</span>s Team</p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody>
                </table>                 
                    </div>
                </div>
        </div>
    );
}

export default Mail

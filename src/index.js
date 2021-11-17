import React, {useState, useEffect, createRef} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateTimePicker from 'react-datetime-picker';

const EXAM_NAME = 'SI 579 Practice Midterm 2';
const SHORT_EXAM_NAME = 'Midterm 2';
const EXAM_LINK = 'https://umich.instructure.com/courses/475967/assignments/1547537';
const due = new Date('Mon Nov 22 2021 16:05:00 GMT-0500 (Eastern Standard Time)')

ReactDOM.render(<>
    <Helmet>
        <title>{EXAM_NAME}</title>
    </Helmet>
    <MidtermExam name={EXAM_NAME} shortName={SHORT_EXAM_NAME} link={EXAM_LINK} due={due} />
</>, document.getElementById('root'));

function MidtermExam({name, shortName, link}) {
    const [dueTime, setDueTime] = useState(due);

    return <header className="container">
        <div className="row"><h1 className="col">{name}</h1></div>
        <div className="row"><div className="col exam instructions">
            <p>Complete all of the questions below. <strong>You should only need to edit the files under the <code>js/</code> directory.</strong> If you have any questions, please ask them via Slack in the #si-579-f21 channel.</p>
            <p>When you are done, upload your code to GitHub and post the link to your code on Canvas (under <a href={link} target="_blank">the {shortName} assignment</a>).</p>
        </div></div>
        <div className="row" id="time-left">
            <div className="col-md-6">
                <label htmlFor="exam-due-date">Turn your exam in by:</label>
                <DateTimePicker value={dueTime} onChange={setDueTime} />
                {/* <input ref={dateRef} type="date" value="2021-11-22" onChange={updateDueTime} id="exam-due-date" />
                <input ref={timeRef} type="time" value="16:05" onChange={updateDueTime} /> */}
            </div>
            <div className="col-md-6">
                <output id="exam-time-left" className="float-end"><CountdownTimer toDate={dueTime} /></output>
            </div>
        </div>
    </header>;
}

function getSecondsDiff(date1, date2) {
    return Math.floor((date1.getTime() - date2.getTime())/1000);
}
function s(n) { return n===1 ? '' : 's' }


function CountdownTimer({toDate}) {
    const [totalSecondsRemaining, setSecondsLeft] = useState(getSecondsDiff(toDate, new Date()));

    const minutesLeft = Math.floor(totalSecondsRemaining/60);
    const secondsLeft = totalSecondsRemaining - 60 * minutesLeft;
    setTimeout(() => {
        setSecondsLeft(getSecondsDiff(toDate, new Date()));
    }, 1000);

    return `${minutesLeft} minute${s(minutesLeft)} and ${secondsLeft} second${s(secondsLeft)} remaining`;
}
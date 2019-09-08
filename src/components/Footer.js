import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.meetup.com/KansasCityJUG/" className="icon fa-meetup" target="_blank"><span className="label">Meetup</span></a></li>
                        <li><a href="https://twitter.com/kcjug" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
                        <li><a href="https://bit.ly/2KZfkLZ" className="icon fa-slack" target="_blank"><span className="label">Slack</span></a></li>
                        <li><a href="https://github.com/kcjug" className="icon fa-github" target="_blank"><span className="label">Github</span></a></li>
                        <li><a href="mailto:kansascityjug@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>Background image licensed under <a href="https://creativecommons.org/licenses/by/2.0/deed.en">CC 2.0 Attribution Generic</a> license</li>
                    </ul>
                    <ul className="copyright">
                        <li>Built from Gatsby Starter Strata</li><li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer

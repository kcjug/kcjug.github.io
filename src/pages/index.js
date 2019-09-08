import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "kcjug"
        const siteDescription = "Fostering the Java Community in the greater Kansas City metro."

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="about">
                        <div>
                            <header className="major">
                                <h2>We have a passion for all things Java&trade;</h2>
                            </header>
                            <p>
                                Whether you are a dedicated professional or a coding hobbyist, novice developer or seasoned
                                engineer, programming student or lifelong learner, the Kansas City JUG is dedicated to bringing
                                content to the community about all things on the JVM.
                                <br />
                                If you're curious about <a href="https://kotlinlang.org/">Kotlin</a>, juiced
                                about <a href="https://jakarta.ee/">Jakarta EE</a>, stoked
                                about <a href="https://spring.io/">Spring</a>, or anything in between, our meetups span a
                                variety of topics related to Java&trade; and other JVM-based technologies.
                                <br />
                                We feature speakers from the local community as well as internationally renowned speakers,
                                authors, and industry leaders.
                                <br />
                                In addition to the informative topics, Kansas City JUG meetups give our members the opportunity
                                to network with other developers and our great sponsors! Our other platforms facilitate
                                interaction among our members. Feel free to dive in and share a topic, ask a question, find
                                employment opportunities, or just socialize!
                            </p>
                        </div>
                    </section>

                    <section id="events">
                        <div>
                            <header className="major">
                                <h2>Kansas City JUG Events</h2>
                            </header>
                            <p>
                                Kansas City JUG hosts meetups on a monthly basis. Our typical meetups are on the 3rd
                                Wendesday of the month. Occasionally, we host meetups on different days to accomodate
                                speaker travel dates or avoid collision with other events (such as US holidays). To view
                                and RSVP for upcoming events, check
                                our <a href="https://meetup.com/KansasCityJUG/events">events schedule on meetup.com</a>.
                                {/* TODO: embed events with https://www.gatsbyjs.org/packages/gatsby-source-meetup/ */}
                            </p>
                        </div>
                    </section>

                    <section id="interact">
                        <div>
                            <header className="major">
                                <h2>Get involved with Kansas City JUG!</h2>
                            </header>
                            <p>
                                We encourage the Kansas City JUG community to get involved! There are several outlets which
                                community members can use to interact with the rest of the community. Check us out below!
                                <ul className="icons">
                                    <li><a href="https://twitter.com/kcjug" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                                    <li><a href="https://github.com/kcjug" className="icon fa-github"><span className="label">Github</span></a></li>
                                    <li><a href="https://www.meetup.com/KansasCityJUG/" className="icon fa-meetup"><span className="label">Meetup</span></a></li>
                                    <li><a href="https://bit.ly/2KZfkLZ" className="icon fa-slack"><span className="label">Slack</span></a></li>
                                    <li><a href="mailto:kcjug@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                                </ul>
                                As a member of the community, you can help make Kansas City JUG better! We always welcome
                                suggestions for topics, speakers, locations, and <a href="#sponsor">sponsors</a>. The success of
                                KC JUG is driven by the community, and we strive to be responsive to the preferences of our members.
                                <br />
                                KC JUG is organized by a group of volunteers, and we are always looking for more help! If you are interested in
                                getting involved with organizing KC JUG, <a href="#contact">let us know</a>!
                            </p>
                            <p>
                                Since we're always looking for feedback, take a few minutes and let us know what you think!
                                <br />
                                <a href="https://forms.gle/tTuptDfjKqvvnwBq6" target="_blank">Can the schedule better accomodate you?</a>
                                <br />
                                <a href="https://forms.gle/bzCGs8UWia9VpPp59" target="_blank">What things will bring you out to KC JUG?</a>
                                <br />
                                <a href="https://forms.gle/EsPBdoEbMN4WAgjB6" target="_blank">Should we host workshops?</a>
                            </p>
                            <p>
                                We welcome all other feedback as well. <a href="#contact">Let us know what's on your mind!</a>
                            </p>
                        </div>
                    </section>

                    <section id="sponsor">
                        <div>
                            <header className="major">
                                <h2>Sponsor a Kansas City JUG Event</h2>
                            </header>
                            <p>
                                We rely on sponsorship efforts for bringing speakers
                                to Kansas City and assistance in facilitating a welcoming atmosphere atmosphere for our members.
                                In exchange for sponsorship, our sponsors have the opportunity to join in the networking and social
                                interaction with the members in attendance, as well as receive recognition for their sponsorship.
                                {/* TODO: Provide more details and the standard sponsor blurb, hopefully in something that can be
                                hidden for better facilitation on mobile. */}
                                {/* TODO: Add logos of recurring sponsors. */}
                            </p>
                        </div>
                    </section>

                    <section id="contact">
                        <div>
                            <header className="major">
                                <h2>Get In Touch with KC JUG!</h2>
                            </header>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-meetup"><span className="label">Meetup</span></h3>
                                        <a href="https://www.meetup.com/KansasCityJUG/" target="_blank">KansasCityJUG</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-twitter"><span className="label">Twitter</span></h3>
                                        <a href="https://twitter.com/kcjug" target="_blank">@kcjug</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-slack"><span className="label">Slack</span></h3>
                                        <a href="https://bit.ly/2KZfkLZ" target="_blank">kansascityjug.slack.com</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-github"><span className="label">GitHub</span></h3>
                                        <a href="https://github.com/kcjug" target="_blank">kcjug</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:kansascityjug@gmail.com">kansascityjug@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
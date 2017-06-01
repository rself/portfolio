/**
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import WebsiteCard from '../../components/WebsiteCard';
import Layout from '../../components/Layout';

const tilesData = [
  {
    img: 'tile-wide.png',
    title: 'Portfolio',
    desc: 'Portfolio and demo site, testing out a React/ASP.NET Core pairing with Material Design Lite',
    year: '2017',
    tech: ["React", "ASP.NET CORE", "Material Design", "Node.JS", "Webpack", "Babel", "HTML", "JS", "CSS"],
    link: "/",
  },
  {
    img: 'video-game-resume.png',
    title: 'Video Game Resume',
    desc: 'Video game version of my resume from 2014',
    year: '2014',
    tech: ["HTML5 Canvas", "Bootstrap", "JS", "CSS"],
    link: "http://chusters.com/rich-selfridge",
  },
  {
    youtube: 'https://www.youtube.com/embed/OmWJKguxpqQ',
    title: 'THE GRID',
    desc: 'Mobile game I created using Unity',
    year: '2017',
    tech: ['Unity','Android','iOS'],
    link: "https://itunes.apple.com/us/app/the-grid-rself-games/id1063154124",
  },
  {
    img: 'rself-games-website.png',
    title: 'RSelf Games Website',
    desc: 'Vanilla JS site I created to promote THE GRID and RSelf Games',
    year: '2016',
    tech: ["HTML5 Canvas", "Bootstrap", "JS", "CSS"],
    link: "https://rselfgames.com",
  },
  {
    img: 'ldb-website.png',
    title: 'Little Devil Band Promo Site',
    desc: 'Video game version of my resume from 2014',
    year: '2011',
    tech: ["HTML5 Canvas", "Bootstrap", "JS", "CSS"],
    link: "http://chusters.com/portfolio/ldb",
  },
  {
    img: 'snowpraise-2-website.png',
    title: 'SnowPraise PHP Demo Site',
    desc: 'Video game version of my resume from 2014',
    year: '2011',
    tech: ["HTML5 Canvas", "Bootstrap", "JS", "CSS"],
    link: "http://chusters.com/portfolio/login-site",
  },
  {
    img: 'dynamic-website.png',
    title: 'Dynamic Bootstrap Demo Site',
    desc: 'Video game version of my resume from 2014',
    year: '2014',
    tech: ["HTML5 Canvas", "Bootstrap", "JS", "CSS"],
    link: "http://chusters.com/portfolio/bootstrap.html",
  },
];


class Home extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    //document.title = title;
  }

  render() {
    return (
      <Layout>
        <div className="mdl-grid">
          {tilesData.map((tile) => (
            <WebsiteCard
              key = {tile.title}
              className = "mdl-cell mdl-cell--4-col"
              img = {tile.img || null}
              youtube = {tile.youtube || null}
              title = {tile.title}
              link = {tile.link}
              desc = {tile.desc}
              year = {tile.year}
              tech = {tile.tech}
            ></WebsiteCard>
          ))}
        </div>
      </Layout>
    );
  }
}

export default Home;

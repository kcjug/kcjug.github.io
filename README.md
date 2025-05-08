# Developer Notes

This site is built with [Hugo](https://gohugo.io/). To run the site locally, install Hugo and run the following commands:

```bash
npm install
hugo server
```

## Develop branch

The main source branch for this repository is the `develop` branch. All code changes should target this branch rather than `master`.

## Dynamic Content

The site currently builds content into the site by pulling the RSS feed of the [KCJUG Meetup page](https://www.meetup.com/kansascityjug/events/rss). Note, this site can then be scheduled to rebuild weekly or monthly if you wish to automatically build in new content. Content was not pulled client-side due to CORS policy.

## Master Branch

The `master` branch is for the rendered assets from `develop` to be published as the public site. Site will be published to `master` branch through the [GitHub Actions defined](.github/workflows/gh-pages.yml).

# Attribution

Background (header.jpg) sourced from Wikimedia Commons, from the NOAA Photo Library. Licensed under the Creative Commons [Attribution 2.0 Generic](https://creativecommons.org/licenses/by/2.0/deed.en) license.

Source URL: https://commons.wikimedia.org/wiki/File:Amer0338_(19157544483).jpg
Last accessed 04 September 2019.

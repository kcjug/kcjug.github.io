# Developer Notes

This site was built using a site template framework, [Gatsby](https://www.gatsbyjs.org). Gatsby requires an installation of [Node.js and npm](https://www.npmjs.com/get-npm). To get started with Gatsby, the [Gatsby quick-start guide](https://www.gatsbyjs.org/docs/quick-start/) will give a great introduction for how to installing Gatsby and run the site locally in development mode.

Once Gatsby is installed, navigate to the base directory of the project. From that directory, the site can be generated and opened in the default web browser with:
```bash
gatsby develop -o
```

After the page is opened, changes to the source will be reflected in the opened site.

## Develop branch

The main source branch for this repository is the `develop` branch. All code changes should target this branch rather than `master`.

## Master Branch

The `master` branch is for the rendered assets from `develop` to be published as the public site. Once changes have been merged into `develop`, an administrator will need to generate and publish the site. To publish the site, you will need to have `Node.js`, `npm`, `gatsby`, and [`gh-pages-cli`](https://www.npmjs.com/package/gh-pages-cli) installed.

To generate the site, check out the `develop` branch and run
```bash
gatsby build
```

followed by
```bash
gh-pages -d public -b master
```

# Attribution

Site built with [Gatsby](https://www.gatsbyjs.org). From [gatsby-starter-strata](https://github.com/ChangoMan/gatsby-starter-strata).

Background (header.jpg) sourced from Wikimedia Commons, from the NOAA Photo Library. Licensed under the Creative Commons [Attribution 2.0 Generic](https://creativecommons.org/licenses/by/2.0/deed.en) license.

Source URL: https://commons.wikimedia.org/wiki/File:Amer0338_(19157544483).jpg
Last accessed 04 September 2019.

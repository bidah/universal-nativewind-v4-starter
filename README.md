# ⚛️💨 Universal Nativewind v4 starter

<img src="https://i.imgur.com/WXzT4GR.png" alt="Image"/>
This starter is a expo managed app setup to create universal apps using expo-router and nativewind v4.

Run with `npm start` and use `i` and `a` to launch app on expo go. `w` to launch web app.

## Includes

- Expo SDK 51
- Nativewind v4.1.10
- Expo Router v2
  - typed routes
- Typescript 5
- Reanimated v3
- Gesture Handler v2

## Native Deploy

> ℹ️ For all these steps you need to install EAS first

```bash
npm install -g eas-cli
```

```bash
eas build:configure
```

Login to expo account

```bash
eas login
```

Build for all native platforms (IOS, Android)

```bash
npm run native:build:all
```

Build for IOS

```bash
npm run native:build:ios
```

Build for Android

```bash
npm run native:build:android
```

More info @ <https://docs.expo.dev/build/setup/>

> ⚠️ There is an issue with hot reloading on the web, so you may experience missing updates. This issue has already been fixed in an [upcoming Metro release](https://github.com/expo/expo/pull/25339), and Mark from Nativewind [may implement a fix before that](https://github.com/marklawlor/nativewind/issues/643). In any case this does not happen all the time and you can still work by focusing on a mobile-first approach. If you notice that updates are missing on the web, they will show up a bit later (based on my experience) or after making some additional changes on native mobile.

## Web Deploy

Scripts to build and deploy your app on the web with a static deploy configuration.

> ℹ️ You need to install netlify CLI first to use `web:deploy` and `web:deploy:prod` scripts

```bash
npm install -g netlify-cli
```

Build web project to the **dist** folder

```bash
npm run web:build
```

Deploy to Netlify with testing URL

```bash
npm run web:deploy
```

Deploy to production URL

```bash
npm run web:deploy:prod
```

### Example deploy to Netlify

<https://universal-nativewind-v4-starter.netlify.app/>

## Path alias

Enabled for you to import modules using `@/components` custom alias instead of a relative path. You can extend it to add more alias paths as you wish.

```jsx
import YourComponent from "@/components/YourComponent";
```

More info @ <https://docs.expo.dev/guides/typescript/#path-aliases>

## Expo Router

Expo Router is a native and platform-optimized navigation solution built on top of React Navigation, offering deep linking, offline-first capabilities, optimization features, universal refresh and linking across Android, iOS, and web, as well as the ability to make app content discoverable to search engines.

More info @ <https://docs.expo.dev/routing/introduction/>

### Typed routes

App comes configured with typed routes

```jsx
✅ <Link href="/user/1" />

// TypeScript errors if href is not a valid route
❌ <Link href="/usser/1" />
```

More info @ <https://docs.expo.dev/router/reference/typed-routes/>

## Nativewind v4 docs

New docs for v4 available @ <https://www.nativewind.dev/v4/overview>

## About Author

### [Rodrigo Figueroa](https://twitter.com/bidah)

Follow Rodrigo Figueroa, creator of Universal Nativewind v4 Starter, on X/Twitter: [@bidah](https://twitter.com/bidah)

### [Mark Lawlor](https://twitter.com/mark__lawlor)

Follow Mark Lawlor, creator of Nativewind, on X/Twitter: [@mark\_\_lawlor](https://twitter.com/mark__lawlor)

### [Evan Bacon](https://twitter.com/baconbrix)

Follow Evan Bacon, creator of Expo Router, on X/Twitter: [@baconbrix](https://twitter.com/baconbrix)

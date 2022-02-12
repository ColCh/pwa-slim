# pwa-slim

minimal PWA

just enough to make it installable

I use to install my [ttyd](https://github.com/tsl0922/ttyd) as PWA

## You said TTYD in PWA?

Yes, just look at that:

<details>
<summary>OPEN IMAGE</summary>
<img src="https://i.imgur.com/0HxWBcG.png" />
</details>

### How?

1. clone this repo `git clone https://github.com/ColCh/pwa-slim.git`
2. open web server `python3 -m http.server 7681`
3. open <http://localhost:7681> in Chrome
4. click on **Install** PWA button
5. close python web server
6. install ttyd <https://github.com/tsl0922/ttyd>
7. launch ttyd: `ttyd -p 7681 -i 127.0.0.1 tmux new -A -s ttyd`

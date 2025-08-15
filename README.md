# Triple tap

>A simple game application.

<br>

Player will be able to:
- view Game page to:
  - play, by clicking on the button below "Triple tap" title `3 times`
  - reset the score, if not satisfied by it
  - enter a name and a number, preferably the highest, and submit it
- view Score page to:
  - check the leaderboard, sorted by the highest score in descending order

<br>

Game rules:
- score consists of **3** numbers between `1 and 100`
  - if `all are different` picking the highest number will be the new high score <br>
  **Example:** Score of `1, 56, 97` makes 97 the highest

  <br>

  - if `two are the same` it is a **Pair**. Picking that number will be the new high score <br>
  **Example:** Score of `7, 16, 7` makes 7 the highest, beating **100**

  <br>

  - if `all are the same` it is a **Set**. Picking that number will be the new high score <br>
  **Example:** Score of `1, 1, 1` makes 1 the highest, beating **Pair 100**

<br>

**Client tech stack:**
>*React*

>*Tailwind*

<br>

**Server tech stack:**
>*Express*

<br>

### Check project current state:

>Create a folder at a convenient location. Use your preferred IDE to open a terminal, navigate to the newly created folder, and execute the command:

```
git clone https://github.com/dmtfvn/yowave.git .
```

<br>

>Open a new terminal, navigate to server folder, and execute the command:

```
npm i
```
```
npm run dev
```

<br>

>Open a new terminal, navigate to client folder, and execute the command:

```
npm i
```
```
npm run dev
```

<br>

>Start the project by Ctrl + Left Mouse Click (on Windows), or ⌘ + Left Mouse Click (on Mac) on the localhost link

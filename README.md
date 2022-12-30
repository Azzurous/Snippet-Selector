Kindly cobbled together through hundreds of google searches by Azzurous, and to anyone good with HTML/CSS/JS, I'm sorry for whatever coding horrors my lack of experience may have unknowingly created, but feel free to improve it.

Clipboard -> buttons copy their text to clipboard
Autopast -> buttons append their text textarea
Append -> choose between button text being followed by a space " " or a comma and space ", "

To anyone more oblivous than I was when I started working on this, below's a general overview of this Template 

---

in "HTML Section 2 - Tab Banner"
To create a new tab, uncomment or create a new "button" like the one below,
replacing "tabX" with the next sequential number and a new title where "Line 2 Eg. 1" 

`<button class="tablinks" onclick="openTab(event, 'tab9')">Line 2 Eg. 1</button>`

Then create "div" in the page section like the one below and make sure the number on "tabX" matches the button

`<div id="tab9" class="tabcontent">`

---

in "HTML Section 3 - Tab Pages"
To change amount of columns edit the "id" of "div"s that have the class "buttoncontainer" like the one below	

`<div id="btcn1" class="buttoncontainer">`

Eg. id="btcn2" -> id="btcn4"  / avalible: btcn1, btcn2, btcn4, btcn6, btcn8
To use diffrent numbers of colums go to "CSS Section 5 - Buttons" and figure out the pattern, it's not that hard

---

in "HTML Section 3 - Tab Pages" / Subsections 
To change or add snippets edit the space between > < when "One" is on the example below, any amount of text should work fine, though it might not fit

`<button onClick="reply_click(this.textContent)">One</button> `

these should be placed within the "div"s of the "buttoncontainer" class

---

The colour scheme can be centrally changed in, "CSS Section 0 - Theme" by replacing the rbg colour codes

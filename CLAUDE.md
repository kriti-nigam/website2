# Clay Court design system (kritinigam.dc.html + all sub-pages)

## Palette
- Clay ground: #b4552f (body bg #b4552f; page vignettes: radial highlight rgba(255,214,168,.20) top-right, shadow rgba(60,20,5,.22) bottom-left)
- Deep clay (marks/grains): #7a3014
- Cream (text/paper cards/inverted sections): #f7efdf
- Soft cream body text: #fbe9d4
- Peach accent (kickers, handwritten notes): #ffd9b8
- Terracotta (buttons, accents on cream): #a34a28
- Ink on cream: #3a2114
- Ball: radial-gradient(circle at 30% 28%, #f2ff9b, #cddd3c 60%, #93a51e)

## Type
- Display: 'Instrument Serif', weight 400, italics for emphasis words. H1 clamp(64px,11vw,150px)/0.95; H2 clamp(38px,5vw,62px)/1.05
- Body/UI: 'Space Grotesk' 400–600, body 17–19px/1.65–1.75
- Handwritten annotations: 'Caveat' 22–30px, color #ffd9b8 (or #a34a28 on cream), slight rotate(±1.5–2deg)
- Kickers: 12px, letter-spacing .22em, uppercase, #ffd9b8, tennis-scoring names ("First set — about", "Changeover — off court", "Match point")

## Motifs
- Clay grain: fixed overlay, two radial-gradient dot patterns (7px/11px), opacity .5
- Chalk court lines: fixed 3px lines rgba(247,239,223,.34) at 6vw left/right (toggleable prop courtLines)
- Ball marks: subtle elliptical smudges rgba(112,42,16,.22→.16), box-shadow halo rgba(230,160,120,.14), random rotate
- Paper cards: bg #f7efdf, tilted rotate(±1–2deg), box-shadow 0 10px 26px rgba(46,26,14,.22), hover: straighten + translateY(-8px)
- Buttons: uppercase 14px ls .12em; filled #a34a28/cream text, or 2px solid #a34a28 outline on cream sections
- Footer/contact: inverted cream section (#f7efdf bg, #3a2114 text)

## Signature interaction (site-wide)
Cursor-follow tennis ball: 28px ball lerps to pointer (factor .09), rotate with x, fixed overlay z-90 pointer-events:none; kicks up clay dust when speed >5 (puffs rgba(214,120,76,.45)/rgba(232,166,124,.38) opacity .3–.55 kicked opposite travel + small #7a3014 grains falling back). Implementation lives in kritinigam.dc.html logic (dust(), componentDidMount) — copy verbatim to sub-pages. Note: set ball opacity every RAF frame (re-renders reset inline styles).

## Layout
- Sections: padding 10vh 8vw, max-width 1300px; nav padding 28px 8vw
- Images: <image-slot> (image-slot.js in helmet), distinct ids per page, framed in tilted cream "polaroid" wrappers with Caveat captions
- a { color:#f7efdf } hover #2e2119 (on cream: #a34a28)

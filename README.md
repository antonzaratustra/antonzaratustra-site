# Anton Zaratustra Site - Flame Animation Enhancement

## Overview

This repository contains the enhanced version of the Anton Zaratustra website with flame-colored ASCII animations. The original ASCII phoenix animation has been modified to display warm flame colors (yellows, oranges, and reds) and realistic flame tongue effects instead of the original multi-colored phoenix.

## Files

- [index.html](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/index.html) - Main website with flame-colored ASCII flame animation
- [phoenix.html](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/phoenix.html) - Dedicated page for the flame animation with flame colors
- [script.js](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/script.js) - Additional JavaScript functionality for the main site
- [styles.css](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/styles.css) - Additional CSS styling
- [test-flame-colors.html](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/test-flame-colors.html) - Test page for flame color functions
- [test-flame-tongues.html](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/test-flame-tongues.html) - Test page for flame tongue effects
- [.qoder/quests/color-animation-adjustment.md](file:///Users/antonzaratustra/Projects/antonzaratustra%20site/antonzaratustra-site/.qoder/quests/color-animation-adjustment.md) - Design document for the flame animation enhancement

## Flame Animation Implementation

The flame animation enhancement modifies the ASCII character coloring to use only warm tones with a smoother gradient and creates realistic flame tongue shapes:

### Flame Color Palette

- **Light Yellow**: #FFFFCC
- **Yellow**: #FFF299
- **Golden Yellow**: #FFE566
- **Yellow**: #FFD700
- **Yellow-Orange**: #FFCC00
- **Golden**: #FFBF00
- **Orange-Yellow**: #FFB200
- **Orange**: #FFA500
- **Slightly Darker Orange**: #FF9900
- **Dark Orange**: #FF8C00
- **Bright Orange**: #FF8000
- **Deep Orange**: #FF7300
- **Vibrant Orange**: #FF6600
- **Bright Red-Orange**: #FF5A00
- **Intense Orange**: #FF4D00
- **Deep Red-Orange**: #FF4000

### Flame Tongue Effects

The animation now creates realistic flame tongue shapes that move dynamically:
- Central main flame that rises upward
- Secondary flame tongues that dance around the main flame
- Organic movement patterns that simulate real fire behavior

### Key Functions

1. `interpolateColor(color1, color2, factor)` - Interpolates between two RGB colors
2. `getRandomFlameColor()` - Returns a random flame color from the extended palette
3. `getFlameColorByValue(v)` - Returns a flame color based on intensity value (0.0 to 1.0) from the extended palette
4. `createFlameEffect(time)` - Generates dynamic flame tongue shapes

### Color Mapping

The animation maps character intensity values to flame colors using a 16-color gradient:
- Values 0.0-0.0625: Light Yellow to Yellow
- Values 0.0625-0.125: Yellow to Golden Yellow
- Values 0.125-0.1875: Golden Yellow to Yellow
- Values 0.1875-0.25: Yellow to Yellow-Orange
- And so on through the full gradient to Deep Red-Orange

## Testing

Open any of the HTML files in a browser to see the flame-colored animations:

- [index.html](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/index.html) - Main site with embedded flame animation
- [phoenix.html](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/phoenix.html) - Full-screen flame animation
- [test-flame-colors.html](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/test-flame-colors.html) - Color function verification
- [test-flame-tongues.html](file:///Users/antonzaratustra/Projects/anton-zaratustra%20site/antonzaratustra-site/test-flame-tongues.html) - Flame tongue effect demonstration

## Design Document

See [.qoder/quests/color-animation-adjustment.md](file:///Users/antonzaratustra/Projects/antonzaratustra%20site/antonzaratustra-site/.qoder/quests/color-animation-adjustment.md) for detailed implementation information.
"""
Generate the arche.links Open Graph image (1200×630 PNG).
Light theme variant to match the default.
"""
import os
from matplotlib.patches import FancyBboxPatch, Circle, Rectangle
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches

plt.rcParams['font.sans-serif'] = ['DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False

OUT = "/home/z/my-project/public/og-image.png"

# Light warm minimalist palette
BG = "#FAFAF7"
SURFACE = "#FFFFFF"
SURFACE_ELEVATED = "#F5F3EE"
BORDER = "#E8E5DD"
TEXT = "#1A1A1F"
MUTED = "#6B6B73"
AMBER = "#B8754A"
CREAM = "#C9944F"

W, H = 1200, 630

fig, ax = plt.subplots(figsize=(W / 100, H / 100), dpi=100)
ax.set_xlim(0, W)
ax.set_ylim(0, H)
ax.invert_yaxis()
ax.set_axis_off()
fig.patch.set_facecolor(BG)
ax.set_facecolor(BG)

glow = mpatches.Ellipse((200, -40), width=900, height=400, facecolor=AMBER, alpha=0.06, zorder=1)
ax.add_patch(glow)
glow2 = mpatches.Ellipse((1100, 50), width=500, height=300, facecolor=CREAM, alpha=0.04, zorder=1)
ax.add_patch(glow2)

# Brand mark
brand_box = FancyBboxPatch((60, 50), 60, 60, boxstyle="round,pad=2,rounding_size=14",
                           facecolor="#1b1b1f", edgecolor="#1b1b1f", linewidth=1.5, zorder=5)
ax.add_patch(brand_box)
# Three link nodes inside the dark box
ax.add_patch(Circle((90, 80), radius=7, color=AMBER, zorder=6))
ax.add_patch(Circle((75, 70), radius=3.5, fill=False, edgecolor="#F5F5F7", linewidth=1.6, zorder=6))
ax.add_patch(Circle((105, 70), radius=3.5, fill=False, edgecolor="#F5F5F7", linewidth=1.6, zorder=6))
ax.plot([78, 86], [71, 78], color=AMBER, linewidth=1.2, zorder=6)
ax.plot([102, 94], [71, 78], color=AMBER, linewidth=1.2, zorder=6)

ax.text(140, 75, "arche.links", fontsize=22, color=TEXT, weight="bold",
        ha="left", va="center", zorder=6, family="DejaVu Sans")
ax.text(140, 100, "All your links · one page · free forever", fontsize=11, color=MUTED,
        ha="left", va="center", zorder=6, family="DejaVu Sans")

# Tagline headline
ax.text(60, 200, "All your links.\nOne page. Free forever.",
        fontsize=60, color=TEXT, weight="bold", ha="left", va="top", zorder=6,
        family="DejaVu Sans", linespacing=1.05)
ax.text(60, 340, "100% free Linktree alternative — unlimited links, themes, custom colors.",
        fontsize=20, color=MUTED, ha="left", va="top", zorder=6, family="DejaVu Sans")

# Trust badges
badges = ["Unlimited links", "No sign-up", "All premium free", "Dark + light"]
bx = 60
for b in badges:
    w = len(b) * 8 + 60
    box = FancyBboxPatch((bx, 410), w, 44, boxstyle="round,pad=2,rounding_size=22",
                         facecolor=SURFACE, edgecolor=BORDER, linewidth=1, zorder=5)
    ax.add_patch(box)
    ax.text(bx + w / 2, 432, b, fontsize=14, color=MUTED,
            ha="center", va="center", zorder=6, family="DejaVu Sans")
    bx += w + 14

# Right side: stylized phone mockup
PX = 820
PY = 130
PW = 320
PH = 420
phone_outer = FancyBboxPatch((PX, PY), PW, PH, boxstyle="round,pad=2,rounding_size=28",
                              facecolor=SURFACE, edgecolor=BORDER, linewidth=2, zorder=4)
ax.add_patch(phone_outer)

# Phone notch
ax.add_patch(Rectangle((PX + PW/2 - 30, PY + 6), 60, 8, facecolor=BORDER, edgecolor="none", zorder=5))

# Avatar circle inside phone
ax.add_patch(Circle((PX + PW/2, PY + 70), 26, facecolor="#F5F3EE", edgecolor=AMBER, linewidth=2, zorder=6))

# Name + bio text bars
ax.add_patch(Rectangle((PX + 80, PY + 110), 160, 10, facecolor=TEXT, edgecolor="none", zorder=6))
ax.add_patch(Rectangle((PX + 100, PY + 130), 120, 6, facecolor=MUTED, edgecolor="none", zorder=6))

# 4 link cards
for i in range(4):
    yy = PY + 160 + i * 50
    box = FancyBboxPatch((PX + 24, yy), PW - 48, 38,
                         boxstyle="round,pad=2,rounding_size=10",
                         facecolor=SURFACE_ELEVATED if i != 0 else AMBER,
                         edgecolor=BORDER if i != 0 else "none",
                         linewidth=1.2 if i != 0 else 0, zorder=6)
    ax.add_patch(box)
    # icon circle
    ax.add_patch(Circle((PX + 42, yy + 19), 6,
                        facecolor=AMBER if i != 0 else BG,
                        edgecolor="none", zorder=7))
    # label bar
    label_color = TEXT if i != 0 else BG
    ax.add_patch(Rectangle((PX + 60, yy + 15), 100, 8,
                           facecolor=label_color, edgecolor="none", zorder=7))

# Footer
ax.text(60, 560, "Made with ♥ by Arche — arche-projects.pages.dev",
        fontsize=14, color=MUTED, ha="left", va="center", zorder=6, family="DejaVu Sans")

plt.savefig(OUT, facecolor=BG, dpi=100, bbox_inches=None, pad_inches=0)
plt.close()
print(f"Wrote {OUT}")
print(f"Size: {os.path.getsize(OUT)} bytes")

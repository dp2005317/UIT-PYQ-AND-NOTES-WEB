import re

with open("src/index.css", "r") as f:
    css = f.read()

css = re.sub(r'backdrop-filter:[^;]+;', '', css)
css = re.sub(r'-webkit-backdrop-filter:[^;]+;', '', css)

# Light mode replacements (approximate)
css = css.replace("rgba(255, 255, 255, 0.65)", "#e8e8e8")
css = css.replace("rgba(255, 255, 255, 0.4)", "#e0e0e0")
css = css.replace("rgba(245, 245, 247, 0.7)", "#f0f0f0")
css = css.replace("rgba(255, 255, 255, 0.5)", "#cccccc")
css = css.replace("rgba(255, 255, 255, 0.6)", "#d9d9d9")

# Dark mode replacements (approximate)
css = css.replace("rgba(30, 30, 30, 0.55)", "#222222")
css = css.replace("rgba(45, 45, 45, 0.4)", "#2a2a2a")
css = css.replace("rgba(10, 10, 10, 0.7)", "#0a0a0a")
css = css.replace("rgba(255, 255, 255, 0.08)", "#333333")
css = css.replace("rgba(255, 255, 255, 0.12)", "#444444")

# Modal overlays
css = css.replace("rgba(0, 0, 0, 0.7)", "#111111")
css = css.replace("rgba(0, 0, 0, 0.85)", "#050505")
css = css.replace("rgba(0, 0, 0, 0.6)", "#111111")
css = css.replace("rgba(0,0,0,0.5)", "#111111")

with open("src/index.css", "w") as f:
    f.write(css)

print("Transparency removed")

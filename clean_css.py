import re

with open("src/index.css", "r") as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if "backdrop-filter" in line:
        continue
    
    # Light mode replacements
    line = line.replace("rgba(255, 255, 255, 0.65)", "#e8e8e8")
    line = line.replace("rgba(255, 255, 255, 0.4)", "#e0e0e0")
    line = line.replace("rgba(245, 245, 247, 0.7)", "#f0f0f0")
    line = line.replace("rgba(255, 255, 255, 0.5)", "#cccccc")
    line = line.replace("rgba(255, 255, 255, 0.6)", "#d9d9d9")

    # Dark mode replacements
    line = line.replace("rgba(30, 30, 30, 0.55)", "#222222")
    line = line.replace("rgba(45, 45, 45, 0.4)", "#2a2a2a")
    line = line.replace("rgba(10, 10, 10, 0.7)", "#0a0a0a")
    line = line.replace("rgba(255, 255, 255, 0.08)", "#333333")
    line = line.replace("rgba(255, 255, 255, 0.12)", "#444444")

    # Overlays
    line = line.replace("rgba(0, 0, 0, 0.7)", "#111111")
    line = line.replace("rgba(0, 0, 0, 0.85)", "#050505")
    line = line.replace("rgba(0, 0, 0, 0.6)", "#111111")
    line = line.replace("rgba(0,0,0,0.5)", "#111111")
    
    new_lines.append(line)

with open("src/index.css", "w") as f:
    f.writelines(new_lines)

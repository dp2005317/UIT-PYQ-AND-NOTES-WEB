import os
import subprocess

css_injection = """
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    font-size: 15px !important;
    line-height: 1.6 !important;
    color: #222 !important;
    margin: 40px auto !important;
    max-width: 900px !important;
  }
  p, li, span, h1, h2, h3, div {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    font-size: 15px !important;
    line-height: 1.6 !important;
  }
  h1, h2, h3 {
    margin-top: 1.5em !important;
    margin-bottom: 0.5em !important;
    color: #111 !important;
  }
  b, strong {
    font-weight: 600 !important;
  }
  ul {
    padding-left: 20px !important;
  }
</style>
</head>
"""

input_dir = "/Users/digantapal/Downloads/communityin/original-site/MID SEM PYQ 24-25"
output_dir = "/Users/digantapal/Downloads/communityin/original-site/public/pyqs"
chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for file in os.listdir(input_dir):
    if file.endswith(".docx"):
        name = os.path.splitext(file)[0]
        docx_path = os.path.join(input_dir, file)
        html_path = os.path.join(input_dir, f"{name}.html")
        pdf_path = os.path.join(output_dir, f"{name}.pdf")

        # 1. Convert docx to html
        subprocess.run(["textutil", "-convert", "html", docx_path], check=True)

        # 2. Inject CSS
        with open(html_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        content = content.replace("</head>", css_injection)

        with open(html_path, "w", encoding="utf-8") as f:
            f.write(content)

        # 3. Convert HTML to PDF
        print(f"Generating PDF for {name}...")
        subprocess.run([
            chrome_path,
            "--headless",
            "--disable-gpu",
            f"--print-to-pdf={pdf_path}",
            html_path
        ], check=True)

        # 4. Cleanup HTML
        os.remove(html_path)

print("Conversion complete.")

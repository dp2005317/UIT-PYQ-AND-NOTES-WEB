import re

pyq_mappings = {
    "Computer_Organization_and_Architecture": [
        {"year": "2022-23", "type": "Mid Sem", "fileUrl": "/pyqs/2022-23_Computer_Organization_and_Architecture.pdf", "duration": "2 Hrs"},
        {"year": "2023-24", "type": "Mid Sem", "fileUrl": "/pyqs/2023-24_Computer_Organization_and_Architecture.pdf", "duration": "2 Hrs"}
    ],
    "Design_and_Analysis_of_Algorithms": [
        {"year": "2022-23", "type": "Mid Sem", "fileUrl": "/pyqs/2022-23_Design_and_Analysis_of_Algorithms.pdf", "duration": "2 Hrs"},
        {"year": "2023-24", "type": "Mid Sem", "fileUrl": "/pyqs/2023-24_Design_and_Analysis_of_Algorithms.pdf", "duration": "2 Hrs"},
        {"year": "2024-25", "type": "Mid Sem", "fileUrl": "/pyqs/2024-25_Design_and_Analysis_of_Algorithms.pdf", "duration": "2 Hrs"}
    ],
    "Discrete_Mathematics": [
        {"year": "2022-23", "type": "Mid Sem", "fileUrl": "/pyqs/2022-23_Discrete_Mathematics.pdf", "duration": "2 Hrs"},
        {"year": "2023-24", "type": "Mid Sem", "fileUrl": "/pyqs/2023-24_Discrete_Mathematics.pdf", "duration": "2 Hrs"},
        {"year": "2024-25", "type": "Mid Sem", "fileUrl": "/pyqs/2024-25_Discrete_Mathematics.pdf", "duration": "2 Hrs"}
    ],
    "Economics_and_Accountancy": [
        {"year": "2022-23", "type": "Mid Sem", "fileUrl": "/pyqs/2022-23_Economics_and_Accountancy.pdf", "duration": "2 Hrs"},
        {"year": "2023-24", "type": "Mid Sem", "fileUrl": "/pyqs/2023-24_Economics_and_Accountancy.pdf", "duration": "2 Hrs"},
        {"year": "2024-25", "type": "Mid Sem", "fileUrl": "/pyqs/2024-25_Economics_and_Accountancy.pdf", "duration": "2 Hrs"}
    ],
    "Environmental_Science": [
        {"year": "2022-23", "type": "Mid Sem", "fileUrl": "/pyqs/2022-23_Environmental_Science.pdf", "duration": "2 Hrs"},
        {"year": "2023-24", "type": "Mid Sem", "fileUrl": "/pyqs/2023-24_Environmental_Science.pdf", "duration": "2 Hrs"},
        {"year": "2024-25", "type": "Mid Sem", "fileUrl": "/pyqs/2024-25_Environmental_Science.pdf", "duration": "2 Hrs"}
    ],
    "Operating_System": [
        {"year": "2022-23", "type": "Mid Sem", "fileUrl": "/pyqs/2022-23_Operating_System.pdf", "duration": "2 Hrs"},
        {"year": "2023-24", "type": "Mid Sem", "fileUrl": "/pyqs/2023-24_Operating_System.pdf", "duration": "2 Hrs"},
        {"year": "2024-25", "type": "Mid Sem", "fileUrl": "/pyqs/2024-25_Operating_System.pdf", "duration": "2 Hrs"}
    ]
}

data_file = "/Users/digantapal/Downloads/communityin/original-site/src/data.ts"

with open(data_file, "r") as f:
    content = f.read()

import json

for subject, pyqs in pyq_mappings.items():
    # Convert subject key (e.g. "Computer_Organization_and_Architecture") to name matching
    name_str = subject.replace("_", " ")
    
    # We will find the pyqs: [] for this specific subject and replace it.
    # regex to find the block for the subject
    pattern = r"(name:\s*['\"]" + re.escape(name_str) + r"['\"].*?pyqs:\s*\[)(.*?)(\])"
    
    match = re.search(pattern, content, flags=re.DOTALL | re.IGNORECASE)
    if match:
        # Replace the pyqs array with our generated pyqs + whatever was there
        new_pyqs_str = json.dumps(pyqs)
        new_pyqs_str = new_pyqs_str[1:-1] # remove the outer brackets
        
        # We replace the empty array with our new string
        content = content[:match.start(2)] + new_pyqs_str + content[match.end(2):]

with open(data_file, "w") as f:
    f.write(content)

print("Updated data.ts successfully")

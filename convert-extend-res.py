#! /usr/bin/python3
from pathlib import Path

for extend_res in Path('./resources/korean/assets/en/extendRes').glob('**/*'):
    if not extend_res.is_file():
        continue
    print(f'{extend_res}')
    data = None
    with open(extend_res, 'rb') as f:
        data = bytes(b ^ 0x49 for b in f.read())
    with open(extend_res, 'wb') as f:
        f.write(data)

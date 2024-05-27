# xblock-pdf

> Course component (Open edX XBlock) that provides an easy way to embed a PDF

## Features

- Download button available
- (Optional) Source document download button, for example to provide your PPT file
- Create tracking logs:
  - `edx.pdf.loaded` when a student loads the PDF
  - `edx.pdf.downloaded` when a student downloads the PDF

## Customize the XBlock

By default, PDF Download Allowed is set to `True`.
The default value can  be changed in `xblock-pdf/pdf/ pdf.py`

## Install / Update the XBlock

```shell
cd /edx/app/edxapp
sudo git clone https://github.com/moocitfrance/xblock-pdf
sudo -H -u edxapp bash
source /edx/app/edxapp/venvs/edxapp/bin/activate
cd /edx/app/edxapp
/edx/bin/pip.edxapp install xblock-pdf/
```

# Use the XBlock

### Activate the XBlock in your course

Go to `Settings -> Advanced Settings` and set `advanced_modules` to `["pdf"]`.

### Use the XBlock in a unit

Select `Advanced -> PDF` in your unit.

## License

GNU Affero General Public License 3.0 (AGPL 3.0)

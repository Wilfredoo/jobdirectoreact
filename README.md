# Jobdirecto

## Getting running 
You will need to run the front and back end with theses two commands

serve the back end
```bash
node bundle-server.js
```

Serve the front end
```bash
node index.js
```

### Troubleshooting
Problem: Navigated to `http://localhost:8080/` but the page is blank.

If you open the console can you see 
`GET http://localhost:8080/bundle.js 504 (Gateway Timeout)`.

The Terminal displays
```bash
[HPM] Error occurred while trying to proxy request /bundle.js from localhost:8080 to http://localhost:8081/ (ECONNREFUSED) (https://nodejs.org/api/errors.html#errors_common_system_errors)
```

Solution: Is the back end running? Have you run the command `node bundle-server.js` yet?

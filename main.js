// import * as log from 'loglevel';
// log.warn("module-tastic");

// var log = require('loglevel');
// log.warn("unreasonably simple");

import { $log } from 'ts-log-debug'

$log.level = "debug";

$log.name = "DID";

$log.debug("Some debug messages");
$log.info("Some info messages");
$log.error("Some error messages");
$log.warn("some warning messages");
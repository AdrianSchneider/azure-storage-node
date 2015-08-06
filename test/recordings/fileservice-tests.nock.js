// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=http;AccountName=xplat;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9b24f68e-001a-0037-4c52-cf3aa8000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:43:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service&timeout=10000')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e2b6c31e-001a-0017-5252-cf5664000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:43:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service&timeout=9000')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '739d55be-001a-001e-5452-cf4cea000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:43:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service&timeout=10000')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'bc623e49-001a-0025-2d52-cf0eb4000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:43:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service&timeout=9000')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f1183db7-001a-0006-6b52-cf617f000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:43:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4f2a46fc-001a-0048-4252-cfa49a000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:43:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.file.core.windows.net:80')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e76b7a7b-001a-0028-7852-cfe1b8000000',
  'x-ms-version': '2015-02-21',
  date: 'Wed, 05 Aug 2015 07:43:37 GMT',
  connection: 'close' });
 return result; }]];
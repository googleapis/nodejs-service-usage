// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START serviceusage_get_consumer_quota_limit_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resource name of the quota limit.
   *  Use the quota limit resource name returned by previous
   *  ListConsumerQuotaMetrics and GetConsumerQuotaMetric API calls.
   */
  // const name = 'abc123'
  /**
   *  Specifies the level of detail for quota information in the response.
   */
  // const view = ''

  // Imports the Serviceusage library
  const {ServiceUsageClient} = require('@google-cloud/service-usage').v1beta1;

  // Instantiates a client
  const serviceusageClient = new ServiceUsageClient();

  async function getConsumerQuotaLimit() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await serviceusageClient.getConsumerQuotaLimit(request);
    console.log(response);
  }

  getConsumerQuotaLimit();
  // [END serviceusage_get_consumer_quota_limit_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

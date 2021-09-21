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
  // [START serviceusage_list_consumer_overrides_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resource name of the parent quota limit, returned by a
   *  ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
   *  An example name would be:
   *  `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   */
  // const parent = 'abc123'
  /**
   *  Requested size of the next page of data.
   */
  // const pageSize = 1234
  /**
   *  Token identifying which result to start with; returned by a previous list
   *  call.
   */
  // const pageToken = 'abc123'

  // Imports the Serviceusage library
  const {ServiceUsageClient} = require('@google-cloud/service-usage').v1beta1;

  // Instantiates a client
  const serviceusageClient = new ServiceUsageClient();

  async function listConsumerOverrides() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await serviceusageClient.listConsumerOverridesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listConsumerOverrides();
  // [END serviceusage_list_consumer_overrides_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
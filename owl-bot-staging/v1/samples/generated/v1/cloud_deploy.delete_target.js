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

function main(name) {
  // [START clouddeploy_v1_generated_CloudDeploy_DeleteTarget_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the `Target` to delete. Format should be
   *  projects/{project_id}/locations/{location_name}/targets/{target_name}.
   */
  // const name = 'abc123'
  /**
   *  Optional. A request ID to identify requests. Specify a unique request ID
   *  so that if you must retry your request, the server will know to ignore
   *  the request if it has already been completed. The server will guarantee
   *  that for at least 60 minutes after the first request.
   *  For example, consider a situation where you make an initial request and the
   *  request times out. If you make the request again with the same request ID,
   *  the server can check if original operation with the same request ID was
   *  received, and if so, will ignore the second request. This prevents clients
   *  from accidentally creating duplicate commitments.
   *  The request ID must be a valid UUID with the exception that zero UUID is
   *  not supported (00000000-0000-0000-0000-000000000000).
   */
  // const requestId = 'abc123'
  /**
   *  Optional. If set to true, then deleting an already deleted or non-existing
   *  DeliveryPipeline will succeed.
   */
  // const allowMissing = true
  /**
   *  Optional. If set, validate the request and preview the review, but do not actually
   *  post it.
   */
  // const validateOnly = true
  /**
   *  Optional. This checksum is computed by the server based on the value of other
   *  fields, and may be sent on update and delete requests to ensure the
   *  client has an up-to-date value before proceeding.
   */
  // const etag = 'abc123'

  // Imports the Deploy library
  const {CloudDeployClient} = require('@google-cloud/deploy').v1;

  // Instantiates a client
  const deployClient = new CloudDeployClient();

  async function deleteTarget() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await deployClient.deleteTarget(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  deleteTarget();
  // [END clouddeploy_v1_generated_CloudDeploy_DeleteTarget_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));

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

function main(updateMask, deliveryPipeline) {
  // [START clouddeploy_v1_generated_CloudDeploy_UpdateDeliveryPipeline_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Field mask is used to specify the fields to be overwritten in the
   *  `DeliveryPipeline` resource by the update.
   *  The fields specified in the update_mask are relative to the resource, not
   *  the full request. A field will be overwritten if it is in the mask. If the
   *  user does not provide a mask then all fields will be overwritten.
   */
  // const updateMask = ''
  /**
   *  Required. The `DeliveryPipeline` to update.
   */
  // const deliveryPipeline = ''
  /**
   *  Optional. A request ID to identify requests. Specify a unique request ID
   *  so that if you must retry your request, the server will know to ignore
   *  the request if it has already been completed. The server will guarantee
   *  that for at least 60 minutes since the first request.
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
   *  Optional. If set to true, updating a `DeliveryPipeline` that does not exist will
   *  result in the creation of a new `DeliveryPipeline`.
   */
  // const allowMissing = true
  /**
   *  Optional. If set to true, the request is validated and the user is provided with
   *  an expected result, but no actual change is made.
   */
  // const validateOnly = true

  // Imports the Deploy library
  const {CloudDeployClient} = require('@google-cloud/deploy').v1;

  // Instantiates a client
  const deployClient = new CloudDeployClient();

  async function updateDeliveryPipeline() {
    // Construct request
    const request = {
      updateMask,
      deliveryPipeline,
    };

    // Run request
    const [operation] = await deployClient.updateDeliveryPipeline(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  updateDeliveryPipeline();
  // [END clouddeploy_v1_generated_CloudDeploy_UpdateDeliveryPipeline_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
